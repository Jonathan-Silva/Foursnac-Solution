using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Foursnac.Controllers
{
    public class DeliveryController : Controller
    {
        // GET: Delivery
        public ActionResult Index(string cidade)
        {
            return RedirectToAction("Index", "Home");
        }
    }
}