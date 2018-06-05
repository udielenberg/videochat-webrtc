import { observable, action, comupted } from "mobx";

class UserStore {
	@observable users = [];
}

export const userStore = new UserStore();
