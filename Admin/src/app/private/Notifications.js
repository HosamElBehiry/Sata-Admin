import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";
import DispLang from "../../utils/HEADERS";
import { toast } from "react-toastify";

const sendNotification = async (data) => {
  return await request({ url: `/notifications`, method: "post", data });
};

export const useSendNotification = () => {
  return useMutation(sendNotification, {
    onSuccess: () =>
      toast.success(
        DispLang ? "تم ارسال الاشعار بنجاح" : "Notification Sent Successfully"
      ),
    onError: () =>
      toast.error(
        DispLang ? "حدث خطأ اثناء ارسال الاشعارات" : "Error Invalid !"
      ),
  });
};
