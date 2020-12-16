using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Walkers_Technical_exercise_Alvaro.Services;

namespace Walkers_Technical_exercise_Alvaro.Controllers
{
    [Microsoft.AspNetCore.Mvc.ApiController]
    [Microsoft.AspNetCore.Mvc.Route("[controller]")]
    public class Walkers : ControllerBase
    {
        //Dependency injection
        private IWalkersAssessmentHelper _walkersAssessmentHelper;
        private IHttpContextAccessor _httpContextAccesor;

        public Walkers(IHttpContextAccessor httpContextAccesor)
        {
            _httpContextAccesor = httpContextAccesor;
            _walkersAssessmentHelper = _httpContextAccesor.HttpContext.RequestServices.GetService<IWalkersAssessmentHelper>();
        }

        [HttpGet]
        public ActionResult<string[]> Get(string number = "0")
        {
            string[] response;
            int castedNumber;

            bool castedOk = Int32.TryParse(number, out castedNumber);
            if (!castedOk || castedNumber <= 0)
            {
                return BadRequest("You must provide a number greater than 0");
            }

            response = _walkersAssessmentHelper.CountTo(castedNumber);
            return Ok(response);
        }

    }
}