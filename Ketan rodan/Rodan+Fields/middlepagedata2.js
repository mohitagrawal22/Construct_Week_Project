var data = [
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/ENFM030-Global-208x208-Mobile.jpg?context=bWFzdGVyfGltYWdlc3w2MTE2fGltYWdlL2pwZWd8aW1hZ2VzL2gzYi9oZDQvMTM2OTM5NjU0Njc2NzguanBnfDgzNDMyMjQ4MDFiZjRhZTNjNmY2Y2NjOTA0ZWYzMzg5NGVjMTIzZjk2Y2MzMWJlZmUzMDgxNzZmMTViOTM4ZmM",
    name: "Total RF Serum",
    info: "Energizes millions of surface of skin cells by 200% to adrees all keys sign of agging ",
    price: "$175",
    retailP: "Retail Price",
  },
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE",
    name: "R + F Lash Boost",
    info: "Nightly conditionig serums gives the appreance of longer,darker looking lashes",
    price: "$155",
    retailP: "Retail Price",
  },
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/AAEY015-458x458.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDljLzEzOTc3NTQ0NDI1NTAyLmpwZ3xiNzQ3NjJkOWU1Y2QxOWM5ZDQ4ZGQzZDA1ZjdkNzBhZmRhMjdkYzE5MTU0MWZiZjY5MDc3NzEyMjBkM2E1YThj",
    name: "REDEFINE Multi-Function Eye Cream",
    info: "Visible firms + improves all eye-area wrinkles to restore youthful, natural contours",
    price: "$70",
    retailP: "Retail Price",
  },
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2g2NS9oYjUvMTQ1MzIxNjY4MTE2NzgucG5nfGNhNTQzZTUyNmU3NTMxZjAxZTc5NThjMmQ3MzU0YzVkNTY1OTExMThjNWEyMDBiYTIwMTFhNWM1Yzk4YTk3ODI",
    name: "Active Hydration Serum",
    info: "Instant boot hydration level by 200% + looks in moisture in bouncy skin",
    price: "$112",
    retailP: "Retail Price",
  },
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/HAAGR-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5MjA3fGltYWdlL2pwZWd8aW1hZ2VzL2gzZC9oMzMvMTM5Nzc1NDM5MDEyMTQuanBnfDU5YTY2OWVkYTZjODM5NzY4YTVhZmJlMGNjZDQzNDU1MzUzMWY2MmUzMzY4ZTkxMTgyMWIwYThkNjYxZGRjMzc",
    name: "REDEFINE Regimen",
    info: "Award-wining anti-aging routine visibly lifts+firms for lyounger looking skin",
    price: "$220",
    retailP: "Retail Price",
  },
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/HUNRJ001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5ODg3fGltYWdlL2pwZWd8aW1hZ2VzL2g1ZC9oNGUvMTM5Nzc1NDM2MzkwNzAuanBnfDU5ZTJkYmVkZTg2MTRlOGU1NTg3NjkxYjVjZGYwZjBjZjY4ZTk4YTBiZTYzN2UxZmJjZTE5ZmJhM2I0ZGVhNGM",
    name: "UNBLEMISH Regimen",
    info: "Fighting adult acne uneven skin ton + signs of agging with this potent 4-step routine",
    price: "$190",
    retailP: "Retail Price",
  },
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/ENBR001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0fGltYWdlL2pwZWd8aW1hZ2VzL2g3MS9oMmQvMTM5Nzc1NDMzNzY5MjYuanBnfDMxMTEyY2E3ZDMzNTVjZDA0OGRmODE4NTk4NmNkZjcyMTQwNGM3NDMxNTRkNGEyNTI5MDI2ZTM4OWRkZmEzMzc",
    name: "Rodan + Fields Active Hydration Body Replenish",
    info: "Breakthrough body moisturizer instantly + continously hydrates skin",
    price: "$66",
    retailP: "Retail Price",
  },
];
localStorage.setItem("data", JSON.stringify(data));

var leftdiv1 = [
  {
    imgurl:
      "https://www.rodanandfields.com/en-us/medias/ENFM030-Global-208x208-Mobile.jpg?context=bWFzdGVyfGltYWdlc3w2MTE2fGltYWdlL2pwZWd8aW1hZ2VzL2gzYi9oZDQvMTM2OTM5NjU0Njc2NzguanBnfDgzNDMyMjQ4MDFiZjRhZTNjNmY2Y2NjOTA0ZWYzMzg5NGVjMTIzZjk2Y2MzMWJlZmUzMDgxNzZmMTViOTM4ZmM",
    name: "Total RF Serum",
    info: "Energizes millions of surface of skin cells by 200% to adrees all keys sign of agging ",
    price: "$175",
    retailP: "Retail Price",
  },
];
localStorage.setItem("leftdiv1", JSON.stringify(leftdiv1));
