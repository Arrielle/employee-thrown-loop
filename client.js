// console.log(myFunction([
//
// ]));



// console.log(totalYearsOfExperience);
//
// var name = employee.name;
// var yearsExperience = employee.yearsOfExperience;

$(document).ready(function(){


  var employeeArray = [{name: 'Bob', yearsOfExperience: 4}, {name: 'Carla', yearsOfExperience: 5}, {name: 'John', yearsOfExperience: 10}];
  var totalYearsOfExperience = 0;
  employeeArray.forEach(function(employee, i){
    var yearsOfExperience = employee.yearsOfExperience; //one employees experience
    totalYearsOfExperience += employee.yearsOfExperience;


    $('#employeeExperience').append(
          '<tr>' +
          '<td>' + employee.name + '</td>' +
          '<td>' + employee.yearsOfExperience + '</td>' +
          '</tr>');//ends append

    return totalYearsOfExperience;
  });
  //
  //

});//ends document ready




// go through the array
// find the yearsOfExperience
// add them all together
// var totalYearsOfExperience = 0;
//
// find the employee's name and years of experience and append
