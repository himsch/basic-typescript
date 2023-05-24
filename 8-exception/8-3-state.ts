type NetworkErrorState = {
  result: "fail";
  reason: "offline" | "down" | "timeout";
};
type SuccessState = {
  result: "success";
};
type ResultState = SuccessState | NetworkErrorState;
class NetworkClient {
  tryConnect(): ResultState {
    if (true) {
      return {
        result: "success",
      };
    }
    return {
      result: "fail",
      reason: "offline",
    };
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login..
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (e) {
      console.log("caught");
      // show dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
