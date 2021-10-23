const userSocialMedia = {
  github: 'vinicoli',
  youtube: '',
  facebook: 'Vinicoli',
  instagram: 'vini.coli',
  twitter: 'Vinicoli'
}

function changeSocialMediaLinks() {
  for (let li of socialMediaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github} `

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userProfilePhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
