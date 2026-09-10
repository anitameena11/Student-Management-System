using Microsoft.EntityFrameworkCore;
using studentmanagementAPI.Data;

var builder = WebApplication.CreateBuilder(args);

//REGISTER CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


// Add services/ REGISTER CONTROLLERS 
builder.Services.AddControllers();


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


app.UseHttpsRedirection();

//ENABLE CORS
app.UseCors("ReactPolicy");

app.MapControllers();

app.Run();

