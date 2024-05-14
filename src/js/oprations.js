
// for(const coder of coders) {
//   tbody.innerHTML += `
//   <tr>
//     <th scope="row">${coder.id}</th>
//     <td>${coder.name}</td>
//     <td>${coder.lastName}</td>
//     <td class="text-lowercase ">${coder.email}</td>
// </tr>`
// }

// function withForOf() {
//   for(const coder of coders) {
//     tbody.innerHTML += `
//     <tr>
//       <th scope="row">${coder.id}</th>
//       <td>${coder.name}</td>
//       <td>${coder.lastName}</td>
//       <td class="text-lowercase ">${coder.email}</td>
//   </tr>`
//   }
// }

// function withForIn() {
//     for (const key in coders) {
//         tbody.innerHTML += `
//       <tr>
//         <th scope="row">${coders[key].id}</th>
//         <td>${coders[key].name}</td>
//         <td>${coders[key].lastName}</td>
//         <td class="text-lowercase ">${coders[key].email}</td>
//     </tr>`
//     }
// }



// function withFor() {
//     for (let i = 0; i < coders.length; i++) {


//         tbody.innerHTML += `
//       <tr>
//         <th scope="row">${coder.id}</th>
//         <td>${coder.name}</td>
//         <td>${coder.lastName}</td>
//         <td class="text-lowercase ">${coder.email}</td>
//     </tr>`
//     }
// }

export function index(coders, tbody) {
  tbody.innerHTML = ""
  coders.forEach(coder => {
    tbody.innerHTML += `
        <tr>
          <th scope="row">${coder.id}</th>
          <td>${coder.name}</td>
          <td>${coder.lastName}</td>
          <td class="text-lowercase ">${coder.email}</td>
          <td>
            <button type="button" data-id=${coder.id} class="btn btn-primary">details</button>
            <button type="button" data-id=${coder.id} class="btn btn-warning">edit</button>
            <button type="button" data-id=${coder.id} class="btn btn-danger">dalete</button>
          </td>
      </tr>`
  });
}



export function create(name, lastName, email, coders) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value
  }

  coders.push(newCoder)
}
