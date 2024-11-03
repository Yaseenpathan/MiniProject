function validateBusBooking  () 
{
    const departureCity = document.getElementById('departureCity').value;
    const destinationCity = document.getElementById('destinationCity').value;

    if (departureCity === destinationCity) {
        alert('Departure city and destination city cannot be the same.');
        return false;
    }

    return true;
}
