using System.Web.Mvc;

namespace k4Xaml.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Introduction to Text Binding -- Demo 1";

            return View();
        }
    }
}
