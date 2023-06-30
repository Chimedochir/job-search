import { useRoute } from "vue-router";
import { computed } from "vue";
const useConfirmRoute = (routeName) => {
  const router = useRoute();
  return computed(() => router.name === routeName);
};
export default useConfirmRoute;
