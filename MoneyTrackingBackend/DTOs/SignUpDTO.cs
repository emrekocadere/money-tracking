﻿using System;
namespace MoneyTrackingBackend.DTOs
{
	public class SignUpDTO
	{
		public string Name { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Balance { get; set; }
    }
}

