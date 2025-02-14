"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = exports.UserSearchIterator = exports.UserSearchOperator = void 0;

var _shared = require("../shared");

let UserSearchOperator;
exports.UserSearchOperator = UserSearchOperator;

(function (UserSearchOperator) {
  UserSearchOperator["OR"] = "OR";
  UserSearchOperator["AND"] = "AND";
})(UserSearchOperator || (exports.UserSearchOperator = UserSearchOperator = {}));

var mode;

(function (mode) {
  mode[mode["pending"] = 0] = "pending";
  mode[mode["inProgress"] = 1] = "inProgress";
  mode[mode["complete"] = 2] = "complete";
})(mode || (mode = {}));

class UserSearchIterator {
  constructor(client, data) {
    this.client = client;
    this.data = data;
    this.mode = mode.pending;
  }

  async next() {
    const res = await this.client.search(this.data);
    this.data = { ...this.data,
      cursor: res.results_metadata.next_cursor
    };

    if (!this.data.cursor) {
      this.mode = mode.complete;
    } else {
      this.mode = mode.inProgress;
    }

    return res.results;
  }

  hasNext() {
    return this.mode !== mode.complete;
  }

  async *[Symbol.asyncIterator]() {
    while (this.hasNext()) {
      yield this.next();
    }
  }

}

exports.UserSearchIterator = UserSearchIterator;

class Users {
  base_path = "users";

  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  endpoint(path) {
    return `${this.base_path}/${path}`;
  }

  create(data) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: this.base_path,
      data
    });
  }

  get(userID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "GET",
      url: this.endpoint(userID)
    });
  }

  search(data) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: this.endpoint("search"),
      data
    });
  }

  searchAll(data) {
    return new UserSearchIterator(this, data);
  }

  update(userID, data) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "PUT",
      url: this.endpoint(userID),
      data
    });
  }

  delete(userID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(userID)
    });
  }

  deleteEmail(emailID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`emails/${emailID}`)
    });
  }

  deletePhoneNumber(phoneID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`phone_numbers/${phoneID}`)
    });
  }

  deleteWebAuthnRegistration(webAuthnRegistrationID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`webauthn_registrations/${webAuthnRegistrationID}`)
    });
  }

  deleteBiometricRegistration(biometricRegistrationID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`biometric_registrations/${biometricRegistrationID}`)
    });
  }

  deleteTOTP(totpID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`totps/${totpID}`)
    });
  }

  deleteCryptoWallet(cryptoWalletID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`crypto_wallets/${cryptoWalletID}`)
    });
  }

  deletePassword(passwordID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`passwords/${passwordID}`)
    });
  }

  deleteOAuthUserRegistration(oauthUserRegistrationID) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: this.endpoint(`oauth/${oauthUserRegistrationID}`)
    });
  }

}

exports.Users = Users;