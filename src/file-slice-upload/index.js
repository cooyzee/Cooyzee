function request({url, method = 'post', data, headers = {}, requestList}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    xhr.send(data)
    xhr.onLoad = e => {
      resolve({
        data: e.target.response
      })
    }
  })
}

function createFileChunk(file, length = 10) {
  const fileChunkList = []
  const chunkSize = Math.ceil(file.size / length)
  const fileName = file.filename
  let index = 0
  while(index < length) {
    fileChunkList.push({
      hash: fileName + "_" + index,
      chunk: file.slice(chunkSize * index, chunkSize * index++),
      name: fileName
    })
  }
  return fileChunkList
}

async function uploadChunks(fileChunkList) {
  const requestList = fileChunkList.map(({chunk, hash, name}) => {
    const formData = new FormData()
    formData.append("chunk", chunk)
    formData.append("hash", hash)
    formData.append("filename", name)
    return formData
  }).map(formData => {
    request({
      url: '',
      data: formData
    })
  })
  await Promise.all(requestList)
}

async function fileUpload(file) {
  const fileChunkList = createFileChunk(file)
  await uploadChunks(fileChunkList)
}