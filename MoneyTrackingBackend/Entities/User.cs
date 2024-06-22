using System;
using Microsoft.AspNetCore.Identity;

namespace MoneyTrackingBackend.Entities
{
	public class User : IdentityUser<int>
    {
		public double Balance { get; set; }
	}
}

