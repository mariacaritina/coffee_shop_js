function submitOrder() {
    const fullName = document.getElementById('fname').value;
    const selectedBeverage = getSelectedOptions('beverage');
    const selectedCreamer = getSelectedOptions('creamer');
    const selectedSweetener = getSelectedOptions('sweetener');
    const userNotes = document.getElementById('userNotes').value;
    
    const orderMessage = `${fullName}, your ${selectedBeverage} with ${selectedCreamer} and ${selectedSweetener} will be ready soon!`;
    
    alert(orderMessage);
    }
    
    function getSelectedOptions(name) {
    const selectedOptions = document.querySelectorAll(`input[name="${name}"]:checked`);
    const options = Array.from(selectedOptions).map(option => option.value);
    return options.join(', ');
    }