using Microsoft.AspNetCore.Mvc;
using studentmanagementAPI.Data;
using studentmanagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace studentmanagementAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentController : ControllerBase
{
    private readonly AppDbContext _context;

    public StudentController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetStudents()
    {
        var students = await _context.Students.ToListAsync();
        return Ok(students);
    }

    [HttpPost]
    public async Task<IActionResult> AddStudent(Student student)
    {
        _context.Students.Add(student);
       await _context.SaveChangesAsync();

     return CreatedAtAction(
    nameof(GetStudentById),
    new { id = student.Id },
    student);
    }
    
[HttpGet("{id}")]
public async Task<IActionResult> GetStudentById(int id)
{
    var student = await _context.Students.FindAsync(id);

    if (student == null)
    {
        return NotFound();
    }

   return Ok(student);
}

[HttpPut("{id}")]
public  async Task<IActionResult> UpdateStudent(int id, Student updatedStudent)
{
    var student = await _context.Students.FindAsync(id);

    if (student == null)
    {
        return NotFound();
    }

    student.Name = updatedStudent.Name;
    student.Email = updatedStudent.Email;
    student.PhoneNumber = updatedStudent.PhoneNumber;
    student.DateOfBirth = updatedStudent.DateOfBirth;

    await _context.SaveChangesAsync();

    return Ok(student);
}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteStudent(int id)
{
    var student = await _context.Students.FindAsync(id);

    if (student == null)
    {
        return NotFound();
    }

    _context.Students.Remove(student);
   await _context.SaveChangesAsync();

    return Ok("Student deleted successfully.");
}
}
