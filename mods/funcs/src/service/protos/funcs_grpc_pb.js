// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// MIT License
// Copyright (c) 2021 Fonoster Inc
//
// The Funcs proto contains the artificats for function administration
// such as creation and deployment.
'use strict';
var grpc = require('grpc');
var funcs_pb = require('./funcs_pb.js');
var common_pb = require('./common_pb.js');

function serialize_fonos_common_v1alpha1_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type fonos.common.v1alpha1.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_common_v1alpha1_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_CreateFuncRequest(arg) {
  if (!(arg instanceof funcs_pb.CreateFuncRequest)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.CreateFuncRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_CreateFuncRequest(buffer_arg) {
  return funcs_pb.CreateFuncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_DeleteFuncRequest(arg) {
  if (!(arg instanceof funcs_pb.DeleteFuncRequest)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.DeleteFuncRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_DeleteFuncRequest(buffer_arg) {
  return funcs_pb.DeleteFuncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_Func(arg) {
  if (!(arg instanceof funcs_pb.Func)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.Func');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_Func(buffer_arg) {
  return funcs_pb.Func.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_FuncLog(arg) {
  if (!(arg instanceof funcs_pb.FuncLog)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.FuncLog');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_FuncLog(buffer_arg) {
  return funcs_pb.FuncLog.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_GetFuncLogsRequest(arg) {
  if (!(arg instanceof funcs_pb.GetFuncLogsRequest)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.GetFuncLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_GetFuncLogsRequest(buffer_arg) {
  return funcs_pb.GetFuncLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_GetFuncRequest(arg) {
  if (!(arg instanceof funcs_pb.GetFuncRequest)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.GetFuncRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_GetFuncRequest(buffer_arg) {
  return funcs_pb.GetFuncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_ListFuncsRequest(arg) {
  if (!(arg instanceof funcs_pb.ListFuncsRequest)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.ListFuncsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_ListFuncsRequest(buffer_arg) {
  return funcs_pb.ListFuncsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_ListFuncsResponse(arg) {
  if (!(arg instanceof funcs_pb.ListFuncsResponse)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.ListFuncsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_ListFuncsResponse(buffer_arg) {
  return funcs_pb.ListFuncsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fonos_funcs_v1alpha1_UpdateFuncRequest(arg) {
  if (!(arg instanceof funcs_pb.UpdateFuncRequest)) {
    throw new Error('Expected argument of type fonos.funcs.v1alpha1.UpdateFuncRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fonos_funcs_v1alpha1_UpdateFuncRequest(buffer_arg) {
  return funcs_pb.UpdateFuncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FuncsService = exports.FuncsService = {
  // Shows a list of user functions
listFuncs: {
    path: '/fonos.funcs.v1alpha1.Funcs/ListFuncs',
    requestStream: false,
    responseStream: false,
    requestType: funcs_pb.ListFuncsRequest,
    responseType: funcs_pb.ListFuncsResponse,
    requestSerialize: serialize_fonos_funcs_v1alpha1_ListFuncsRequest,
    requestDeserialize: deserialize_fonos_funcs_v1alpha1_ListFuncsRequest,
    responseSerialize: serialize_fonos_funcs_v1alpha1_ListFuncsResponse,
    responseDeserialize: deserialize_fonos_funcs_v1alpha1_ListFuncsResponse,
  },
  // Gets a function by namem
getFunc: {
    path: '/fonos.funcs.v1alpha1.Funcs/GetFunc',
    requestStream: false,
    responseStream: false,
    requestType: funcs_pb.GetFuncRequest,
    responseType: funcs_pb.Func,
    requestSerialize: serialize_fonos_funcs_v1alpha1_GetFuncRequest,
    requestDeserialize: deserialize_fonos_funcs_v1alpha1_GetFuncRequest,
    responseSerialize: serialize_fonos_funcs_v1alpha1_Func,
    responseDeserialize: deserialize_fonos_funcs_v1alpha1_Func,
  },
  // Orders the functions subsystem to download and deploy a function
createFunc: {
    path: '/fonos.funcs.v1alpha1.Funcs/CreateFunc',
    requestStream: false,
    responseStream: false,
    requestType: funcs_pb.CreateFuncRequest,
    responseType: funcs_pb.Func,
    requestSerialize: serialize_fonos_funcs_v1alpha1_CreateFuncRequest,
    requestDeserialize: deserialize_fonos_funcs_v1alpha1_CreateFuncRequest,
    responseSerialize: serialize_fonos_funcs_v1alpha1_Func,
    responseDeserialize: deserialize_fonos_funcs_v1alpha1_Func,
  },
  // Updates a function, keeping metrics intact
updateFunc: {
    path: '/fonos.funcs.v1alpha1.Funcs/UpdateFunc',
    requestStream: false,
    responseStream: false,
    requestType: funcs_pb.UpdateFuncRequest,
    responseType: funcs_pb.Func,
    requestSerialize: serialize_fonos_funcs_v1alpha1_UpdateFuncRequest,
    requestDeserialize: deserialize_fonos_funcs_v1alpha1_UpdateFuncRequest,
    responseSerialize: serialize_fonos_funcs_v1alpha1_Func,
    responseDeserialize: deserialize_fonos_funcs_v1alpha1_Func,
  },
  // Peforms a hard delete of the function
deleteFunc: {
    path: '/fonos.funcs.v1alpha1.Funcs/DeleteFunc',
    requestStream: false,
    responseStream: false,
    requestType: funcs_pb.DeleteFuncRequest,
    responseType: common_pb.Empty,
    requestSerialize: serialize_fonos_funcs_v1alpha1_DeleteFuncRequest,
    requestDeserialize: deserialize_fonos_funcs_v1alpha1_DeleteFuncRequest,
    responseSerialize: serialize_fonos_common_v1alpha1_Empty,
    responseDeserialize: deserialize_fonos_common_v1alpha1_Empty,
  },
  // Peforms a hard delete of the function
getFuncLogs: {
    path: '/fonos.funcs.v1alpha1.Funcs/GetFuncLogs',
    requestStream: false,
    responseStream: true,
    requestType: funcs_pb.GetFuncLogsRequest,
    responseType: funcs_pb.FuncLog,
    requestSerialize: serialize_fonos_funcs_v1alpha1_GetFuncLogsRequest,
    requestDeserialize: deserialize_fonos_funcs_v1alpha1_GetFuncLogsRequest,
    responseSerialize: serialize_fonos_funcs_v1alpha1_FuncLog,
    responseDeserialize: deserialize_fonos_funcs_v1alpha1_FuncLog,
  },
};

exports.FuncsClient = grpc.makeGenericClientConstructor(FuncsService);
