const putContactOnDom = (name, phone, address) => {
   return `<div class="contacts">
   <strong>Name:</strong> ${name}
   <br><strong>Phone:</strong> ${phone} 
   <br><strong>Address:</strong> ${address}</div>
   <hr/>`
}
export default putContactOnDom