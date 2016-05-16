using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Foursnac.Controllers
{
    public class PromocaoController : Controller
    {
        // GET: Promocao
        public ActionResult Index(string promocao)
        {
            return View();
        }
    }
}
