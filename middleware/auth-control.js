export default function ({$auth,redirect}) {
  // console.log(store.state)
  if ($auth.loggedIn()) {
    return redirect('/')
  }
}
