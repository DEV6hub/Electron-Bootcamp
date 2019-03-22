#include <node.h>

void Sum(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();

  int i;
  double a = 3.1415926, b = 2.718;
  for (i = 0; i < 100000; i++) {
    a += b;
  }

  auto total = v8::Number::New(isolate, a);
  args.GetReturnValue().Set(total);
}

void Initialize(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "sum", Sum);
}

NODE_MODULE(addon, Initialize)
