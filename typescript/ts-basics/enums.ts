// enumerations

const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
};
const isLoading = (state: LoadingState) => state === loading;

console.log(isLoading(LoadingState.beforeLoad));

console.log(englishLoadingStates);

// Literal types

// numeric literal
function rollDic(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

console.log(rollDic(3));

function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown) {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 10 });
