using Microsoft.AspNetCore.Mvc;

namespace Silicon_WebAppG.Controllers
{
    public class DefaultController : Controller
    {
        public IActionResult Home()
        {
            return View();
        }
    }
}
