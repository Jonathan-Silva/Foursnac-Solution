using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Foursnac.Controllers
{
    public class UtilController : Controller
    {
        internal static string getUrl()
        {

            string strUrl = System.Web.HttpContext.Current.Request.Url.AbsoluteUri;

            if(strUrl.LastIndexOf("localhost") > -1)
            {
                return "http://localhost:8080/";
            }
            else
            {
                return "http://app.foursnac.com.br/";
            }
        }
    }
}