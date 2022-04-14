window.addEventListener('DOMContentLoaded', (event) => {createInnerHtml();
});



const createInnerHtml = () => {

  const headerHtml = `
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>
                <tr>
                    <td><img class="profile" alt="" src="assets/profile-images/Ellipse -2.png">
                    </td>
                    <td>Subhashree Naik</td>
                    <td>Female</td>
                    <td><div class="dept-lebel"><HR></div>
                    <div class="dept-lebel">Finance</div></td>
                    <td>3000000</td>
                    <td>1 Nov 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" src="assets/icons/delete-black-18dp.svg" alt="delete">
                        <img id="1" onclick="update(this)"  src="assets/icons/create-black-18dp.svg" alt="edit">
                    </td>

                </tr>`;

  
  document.querySelector('#table-display').innerHTML = headerHtml;
}


