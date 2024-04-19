using Microsoft.AspNetCore.Mvc;

namespace Silicon_WebAppG.Controllers
{
    public class CourseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
