﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.Json;
using Newtonsoft.Json;
using Silicon_WebAppG.ViewModels;

namespace Silicon_WebAppG.Controllers
{
    [Authorize]
    public class CoursesController(HttpClient httpClient) : Controller
    {
        private readonly HttpClient _httpClient = httpClient;
        [Route("/courses")]
        public async Task<IActionResult> Index()
        {
            var viewModel = new CourseIndexViewModel();

            var response = await _httpClient.GetAsync("https://localhost:7179/api/Courses");
            if (response.IsSuccessStatusCode)
            {
                var courses = JsonConvert.DeserializeObject<IEnumerable<CourseViewModel>>(await response.Content.ReadAsStringAsync());
                if (courses != null && courses.Any())
                    viewModel.Courses = courses;
            }
            return View(viewModel);


        }
    }
}
