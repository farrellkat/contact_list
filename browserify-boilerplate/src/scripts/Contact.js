const putContactOnDom = (name, phone, address, id) => {
   return `
   <div class="contact--${id}">
   <strong>Name:</strong> ${name}
   <br><strong>Phone:</strong> ${phone}
   <br><strong>Address:</strong> ${address}
   <button id="deleteButton--${id}">Delete ${name}</button>
   </div>
   <hr/>`
}
export default putContactOnDom