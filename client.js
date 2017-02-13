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
          var yearsOfExperience = parseInt(employee.yearsOfExperience); //one employees experience
          totalYearsOfExperience += parseInt(employee.yearsOfExperience);

// var totalYearsOfExperience = parseInt(totalExperience);

          $('#employeeExperience').append(
                '<tr>' +
                '<td>' + employee.name + '</td>' +
                '<td>' + employee.yearsOfExperience + '</td>' +
                '</tr>');//ends append

              $('#totalYears').text(totalYearsOfExperience);

        });// ending employee arrayfunction


$('#employeeForm').on('click', 'button', function() {

  var name = $('#name').val();
  var yearsOfExperience = parseInt($('#numberOfYears').val());

  function Employee(inName, inYearsOfExperience) {
    this.name = inName,
    this.yearsOfExperience = inYearsOfExperience
  }

    var newEmployee = new Employee(name, yearsOfExperience);
    employeeArray.push(newEmployee);

    $('#employeeExperience').empty();

    // $('#totalYears').text().empty();
      totalYearsOfExperience = 0;
      employeeArray.forEach(function(employee, i){

        var yearsOfExperience = parseInt(employee.yearsOfExperience); //one employees experience
        totalYearsOfExperience += parseInt(employee.yearsOfExperience);

        $('#employeeExperience').append(
              '<tr>' +
              '<td>' + employee.name + '</td>' +
              '<td>' + employee.yearsOfExperience + '</td>' +
              '</tr>');//ends append

            $('#totalYears').text(totalYearsOfExperience);

    console.log(totalYearsOfExperience);
      });
});

});//ends document ready




// go through the array
// find the yearsOfExperience
// add them all together
// var totalYearsOfExperience = 0;
//
// find the employee's name and years of experience and append
