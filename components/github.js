import GitHub from 'github-api';

export function Profile() {
    let gh = new GitHub();
    let profile = gh.getUser('eduardomatias').getProfile()
}