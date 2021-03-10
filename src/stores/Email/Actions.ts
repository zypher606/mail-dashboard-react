import {
  EMAIL_ADD,
  EMAIL_ADD_SUCCESS,
  EMAIL_ADD_ERROR,
  EMAIL_FETCH_ALL,
  EMAIL_FETCH_ALL_SUCCESS,
  EMAIL_FETCH_ALL_ERROR,
  EMAIL_FETCH_THREAD,
  EMAIL_FETCH_THREAD_SUCCESS,
  EMAIL_FETCH_THREAD_ERROR,
  EMAIL_MARK_READ,
  EMAIL_MARK_READ_SUCCESS,
  EMAIL_MARK_READ_ERROR,
  EMAIL_MARK_DELETE,
  EMAIL_MARK_DELETE_SUCCESS,
  EMAIL_MARK_DELETE_ERROR,
} from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";
import { StorageManager } from "../../utilities";

export function emailAdd(payload: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: EMAIL_ADD,
    payload,
  });
}

export function emailAddSuccess(response: any) {
  return {
    type: EMAIL_ADD_SUCCESS,
    response,
  };
}

export function emailAddError(error: any) {
  return {
    type: EMAIL_ADD_ERROR,
    error,
  };
}

export function emailFetchAll() {
  return ActionDispatcher.getInstance().dispatch({
    type: EMAIL_FETCH_ALL,
  });
}

export function emailFetchAllSuccess(response: any) {
  return {
    type: EMAIL_FETCH_ALL_SUCCESS,
    response,
  };
}

export function emailFetchAllError(error: any) {
  return {
    type: EMAIL_FETCH_ALL_ERROR,
    error,
  };
}

export function emailFetchThread(payload: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: EMAIL_FETCH_THREAD,
    payload,
  });
}

export function emailFetchThreadSuccess(response: any) {
  return {
    type: EMAIL_FETCH_THREAD_SUCCESS,
    response,
  };
}

export function emailFetchThreadError(error: any) {
  return {
    type: EMAIL_FETCH_THREAD_ERROR,
    error,
  };
}

export function emailMarkRead(payload: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: EMAIL_MARK_READ,
    payload,
  });
}

export function emailMarkReadSuccess(response: any) {
  return {
    type: EMAIL_MARK_READ_SUCCESS,
    response,
  };
}

export function emailMarkReadError(error: any) {
  return {
    type: EMAIL_MARK_READ_ERROR,
    error,
  };
}

export function emailMarkDelete(payload: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: EMAIL_MARK_DELETE,
    payload,
  });
}

export function emailMarkDeleteSuccess(response: any) {
  return {
    type: EMAIL_MARK_DELETE_SUCCESS,
    response,
  };
}

export function emailMarkDeleteError(error: any) {
  return {
    type: EMAIL_MARK_DELETE_ERROR,
    error,
  };
}