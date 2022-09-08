const getLocation = async () => {
  const response = await fetch(
    "https://api.ipregistry.co/?key=yfycs1xvmtfjt1vx"
  );
  const responseData = await response.json();
  return responseData.location.country.name;
};

export default getLocation;
