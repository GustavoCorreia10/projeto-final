function submitProfile() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const socialLinks = document.getElementById('socialLinks').value;
    const photo = document.getElementById('photo').files[0];

    document.getElementById('previewName').textContent = name;
    document.getElementById('previewBio').textContent = bio;
    document.getElementById('previewLink').href = socialLinks;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewPhoto = document.getElementById('previewPhoto');
            previewPhoto.src = e.target.result;
            previewPhoto.hidden = false;
        };
        reader.readAsDataURL(photo);
    } else {
        document.getElementById('previewPhoto').hidden = true;
    }
}
