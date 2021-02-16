export function getUrlExtension(url) {
  const splittedUrl = url.split(/[#?]/)[0].split('.').pop().trim();
  
  switch (splittedUrl) {
    case 'pdf', 'txt', 'doc', 'docx':
      return false
    default:
      return true;
  }
}