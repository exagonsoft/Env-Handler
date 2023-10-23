#include <node.h>
#include <fstream>
#include <string>

void ReadFile(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();
  if (args.Length() != 1) {
    isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  v8::String::Utf8Value filename(args[0]->ToString());
  std::ifstream file(*filename);
  if (file.is_open()) {
    std::string content((std::istreambuf_iterator<char>(file)),
                        std::istreambuf_iterator<char>());
    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, content.c_str()));
  } else {
    isolate->ThrowException(v8::Exception::Error(
        v8::String::NewFromUtf8(isolate, "Failed to open the file")));
  }
}

void Init(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "readFile", ReadFile);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)
