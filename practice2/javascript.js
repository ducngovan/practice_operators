function getImport() {
    // Viết chương trình nhập vào giá trị cho chuỗi message.
    //
    //     Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
    //
    //     Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
    //
    // Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login
    //
    // Còn lại hiển thị chuỗi rỗng

    let message = document.getElementById('message').value;
    if(message=='Employee'){
        alert("Hello");
    }else if(message=='Director'){
        alert("Greetings");
    }else if(message ==''){
        alert("No login");
    }else {
        alert('');
    }

}