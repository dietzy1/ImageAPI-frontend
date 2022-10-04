export async function Loginfunc(username: string, password: string) {
  const formData = new FormData();
  formData.set("username", username);
  formData.set("password", password);

  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/signin/",
    {
      method: "POST",
      body: formData,
      credentials: "include",
    }
  );
  if (!res.ok) {
    return Promise.resolve(false);
  }

  return Promise.resolve(true);
}

export async function Signupfunc(username: string, password: string) {
  const formData = new FormData();
  formData.set("username", username);
  formData.set("password", password);

  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/signup/",
    {
      method: "POST",
      body: formData,
      credentials: "include",
    }
  );
  if (!res.ok) {
    return Promise.resolve(false);
  }
  return Promise.resolve(true);
}

export async function refreshSessionfunc() {
  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/refresh/",
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!res.ok) {
    return Promise.resolve(false);
  }
  return Promise.resolve(true);
}

export async function Logoutfunc() {
  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/signout/",
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!res.ok) {
    return Promise.resolve(false);
  }
  return Promise.resolve(false);
}
