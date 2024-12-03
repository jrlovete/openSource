const fileList = document.getElementById('file-list');
      const fileUploadInput = document.getElementById('file-upload');
  
      function uploadFiles() {
        const files = fileUploadInput.files;
        if (files.length === 0) {
          alert('Please select files to upload');
          return;
        }
  
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
  
          const fileItem = document.createElement('li');
          fileItem.classList.add('file-item');
  
          const fileName = document.createElement('span');
          fileName.classList.add('file-name');
          fileName.textContent = file.name;
  
          const fileSize = document.createElement('span');
          fileSize.classList.add('file-size');
          fileSize.textContent = formatFileSize(file.size);
  
          const downloadButton = document.createElement('a');
          downloadButton.classList.add('download-btn');
          downloadButton.href = URL.createObjectURL(file); 
          downloadButton.download = file.name; 
          downloadButton.textContent = 'Download';

          const removeButton = document.createElement('button');
          removeButton.classList.add('remove-btn');
          removeButton.textContent = 'Remove';
          removeButton.onclick = () => fileItem.remove();
  
          fileItem.appendChild(fileName);
          fileItem.appendChild(fileSize);
          fileItem.appendChild(downloadButton);
          fileItem.appendChild(removeButton);
  
          fileList.appendChild(fileItem);
        }
  
        fileUploadInput.value = '';
      }
  
      function formatFileSize(bytes) {
        if (bytes < 1024) return `${bytes} B`;
        else if (bytes < 1048576) return `${(bytes / 1024).toFixed(2)} KB`;
        else if (bytes < 1073741824) return `${(bytes / 1048576).toFixed(2)} MB`;
        else return `${(bytes / 1073741824).toFixed(2)} GB`;
      }