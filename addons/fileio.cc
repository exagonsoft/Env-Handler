#include <node.h>
#include <fstream>
#include <string>

void ReadFile(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();

  try {
    if (args.Length() != 1 || !args[0]->IsString()) {
      throw std::runtime_error("Wrong arguments");
    }

    v8::String::Utf8Value filename(isolate, args[0]);
    std::ifstream file(*filename, std::ios::in | std::ios::binary); // Open the file in binary mode

    if (file.is_open()) {
      std::string content((std::istreambuf_iterator<char>(file)),
                          std::istreambuf_iterator<char>());
      args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, content.c_str()).ToLocalChecked());
    } else {
      args.GetReturnValue().Set(v8::Undefined(isolate)); // Return undefined if file cannot be opened
    }
  } catch (const std::exception& e) {
    // Handle exceptions and throw them as V8 exceptions
    isolate->ThrowException(v8::Exception::Error(
        v8::String::NewFromUtf8(isolate, e.what()).ToLocalChecked()));
  }
}

void Init(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "readFile", ReadFile);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)
