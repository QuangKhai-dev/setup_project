import { useFormik } from 'formik';
import * as Yup from 'yup';
const Demo = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      hoTen: '',
    },
    onSubmit: (values) => {
      alert(values.hoTen);
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required('Vui lòng không bỏ trống input này'),
    }),
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor>Họ tên</label>
          <input
            onChange={handleChange}
            type="text"
            className="border border-black p-2 rounded"
            name="hoTen"
            value={values.hoTen}
            id
            aria-describedby="helpId"
            placeholder="Vui lòng nhập tên"
          />
          <small id="helpId" className=" text-red-500">
            {errors.hoTen}
          </small>
        </div>
        <div>
          <button
            type="submit"
            className="py-2 px-5 rounded bg-black text-white"
          >
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
