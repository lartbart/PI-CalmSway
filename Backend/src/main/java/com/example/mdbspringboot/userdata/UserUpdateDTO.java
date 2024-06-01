package com.example.mdbspringboot.userdata;

import com.mongodb.lang.Nullable;

public record UserUpdateDTO(@Nullable Integer CPF, @Nullable String username, @Nullable String email, @Nullable String password) {
}
