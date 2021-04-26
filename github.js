class Github {
  constructor() {
    this.client_id = 'e02c99c7dfc12732c4ae';
    this.client_secret = '6530126ec940a463ef05c8290933c35c5bcd71ac';
  }

  async getUser(user) {
    // fetch user profile and repo
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.jason();

    return {
      // profile: profile
      profile
    }
  }

}