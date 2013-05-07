using System.Web.Mvc;

namespace k4Xaml.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Introduction to Input Binding -- Demo 2";

            return View();
        }
    }
}
