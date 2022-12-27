/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            /* global j, i */

function mySubmit() {
                var name = document.getElementById("name").value;
                var email = document.getElementById("email").value;
                var gender = document.getElementById("gender").value;
                var branch = document.getElementById("branch").value;
                var password = document.getElementById("password").value;
                console.log(name);
                console.log(email);
                console.log(gender);
                console.log(branch);
                console.log(password);
                const obj = {"name": name, "email": email, "gender": gender, "branch": branch, "password": password};
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: 'http://localhost:8080/api/v1/student',
                    contentType: "application/json; charset=utf-8",
                    //traditional: true,
                    data: JSON.stringify(obj),
                    success: function (data) {
                        alert("Data submitted successfully.....");
                        console.log('data: ', data);
                         getData();
                    }
                });
                //alert("Data submitted successfully.....");

            }








 function getData() {
                $.ajax({
                    type: "GET",
                    url: "http://localhost:8080/api/v1/student",
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    traditional: true,
//                    data: {},
                    success: function (data) {
//                       $('h6').append(JSON.stringify(data));
                       //console.log(data);
                       // FOR SHOWING IN TABULAR FORM
                       var row = "<tr>";
                        //console.log("data parsed");
                        console.log(data);
                        for (i in data) {
                            var row_of_List = data[i];
                            console.log(row_of_List);
                            var id;
                            for (j in row_of_List) {
                                //     alert(j);
                                //console.log(j);
                                //console.log(row_of_List[j]);
                                row = row + "<td class' " + j + "'>" + row_of_List[j] + "</td>";
                                console.log("KLLL"+j);
                                if (j === "id") {
                                    
                                    id = row_of_List[j];
                                }
                            }
                                console.log(id);
                            row = row + "<td>" + "<input type='button' id='btn1' value='Update' onclick='updatDataById(this)'/></td> ";
                            row = row + "<td>" + "<input type='button'  id='btn2' value='Delete' onclick='deleteDataById(" + id + ")' />" + "</td> ";
                            row = row + "</tr>";
                        }
                        document.getElementById("emptable").innerHTML = row;
                    },
                    error: function () {
                        alert("not working");
                    }

                });

            }
            
            function deleteDataById(id)
            {

                //alert(id);
                //alert("delete executed");
                //var id=$(id).val(); 
                var id=id;
                $.ajax({
                    method: 'DELETE',
                    url: "http://localhost:8080/api/v1/student/"+id,
                    
                    //contentType: "application/json",
                    //dataType : 'json',
                    data: {"id": "id"},
                    success: function (data)
                    {
                        console.log("deleted data" +data);
                        alert('record has been deleted');
                        getData();
                    },
                    error: function (error)
                    {
                        alert(error);
                    }
                });
            }
function updatDataById(element) {
                alert("upDataById");
                var id = $(element).closest('tr').find(".id").text();
                var name = $(element).closest('tr').find(".name").text();
                var email = $(element).closest('tr').find(".email").text();
                var gender = $(element).closest('tr').find(".gender").text();
                var branch = $(element).closest('tr').find(".branch").text();
                var password = $(element).closest('tr').find(".password").text();
                console.log(id);
               console.log(name);
                console.log(email);
                console.log(gender);
                console.log(branch);
                console.log(password);
                const obj = {"id":id, "name": name, "email": email, "gender": gender, "branch": branch, "password": password};


//                formid.lname.value = last;
//                formid.designation.value = des;
//                formid.salary.va formid.lname.value = last;
//                formid.designation.value = des;
//                formidlue = sal;
                alert("after data");
                $.ajax({
                    url: "http://localhost:8080/api/v1/student",
                    type: "POST",
                   contentType: "application/json; charset=utf-8",
                    traditional: true,
                    data: JSON.stringify(obj),

                    success: function (data) {
                        console.log(data);
                        console.log("in success ");
                    }
                });
            }

 

