import React from "react";
import DeleteBtn from "../../buttons/DeleteBtn";
import UpdateBtn from "../../buttons/UpdateBtn";

const UserTable = (props: any) => {
  return (
    <div>
      <div>
        <div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Fullname
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      e-mail
                    </th>

                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      phone Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 w-10 h-10'>
                          <img
                            className='w-full h-full rounded-full'
                            src={props.user.photo}
                            alt=''
                          />
                        </div>
                        <div className='ml-3'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {props.user.fullname}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {props.user.email}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {props.user.phoneNumber}
                      </p>
                    </td>
              <UpdateBtn type={'users'} user={props.user}/>
              <DeleteBtn type={'users'} user={props.user}/>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
