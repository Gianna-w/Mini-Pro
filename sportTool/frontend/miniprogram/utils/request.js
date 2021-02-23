"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var baseUrl = 'http://192.168.1.2:30001';
exports.request = {
    get: function (url, data, callback) {
        wx.request({
            url: "" + baseUrl + url,
            data: data,
            success: function (response) {
                callback(response);
            },
            fail: function (err) {
                callback(err);
            }
        });
    },
    post: function (url, data, callback) {
        wx.request({
            url: "" + baseUrl + url,
            method: 'POST',
            data: data,
            success: function (response) {
                callback(response);
            },
            fail: function (err) {
                callback(err);
            }
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsMEJBQTBCLENBQUE7QUFNN0IsUUFBQSxPQUFPLEdBQVc7SUFDN0IsR0FBRyxFQUFDLFVBQVMsR0FBVSxFQUFDLElBQVcsRUFBQyxRQUF3QjtRQUMxRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLEtBQUcsT0FBTyxHQUFHLEdBQUs7WUFDdkIsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFFLFFBQVE7Z0JBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELElBQUksRUFBQyxVQUFTLEdBQVUsRUFBQyxJQUFXLEVBQUMsUUFBd0I7UUFDM0QsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxLQUFHLE9BQU8sR0FBRyxHQUFLO1lBQ3ZCLE1BQU0sRUFBQyxNQUFNO1lBQ2IsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFFLFFBQVE7Z0JBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMjozMDAwMSdcbnR5cGUgUmVxdWVzdE9wdGlvbiA9ICh1cmw6c3RyaW5nLGRhdGE6b2JqZWN0LGNhbGxiYWNrOihyZXM6YW55KT0+dm9pZCk9PnZvaWRcbnR5cGUgUmVxdWVzdCA9IHtcbiAgZ2V0OlJlcXVlc3RPcHRpb24sXG4gIHBvc3Q/OlJlcXVlc3RPcHRpb25cbn1cbmV4cG9ydCBjb25zdCByZXF1ZXN0OlJlcXVlc3QgPSB7XG4gIGdldDpmdW5jdGlvbih1cmw6c3RyaW5nLGRhdGE6b2JqZWN0LGNhbGxiYWNrOihyZXM6YW55KT0+dm9pZCk6dm9pZCB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGAke2Jhc2VVcmx9JHt1cmx9YCwgXG4gICAgICBkYXRhLFxuICAgICAgc3VjY2VzcyAocmVzcG9uc2UpIHtcbiAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICB9LFxuICAgICAgZmFpbChlcnIpe1xuICAgICAgICBjYWxsYmFjayhlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgcG9zdDpmdW5jdGlvbih1cmw6c3RyaW5nLGRhdGE6b2JqZWN0LGNhbGxiYWNrOihyZXM6YW55KT0+dm9pZCk6dm9pZCB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGAke2Jhc2VVcmx9JHt1cmx9YCwgXG4gICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgZGF0YSxcbiAgICAgIHN1Y2Nlc3MgKHJlc3BvbnNlKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyKXtcbiAgICAgICAgY2FsbGJhY2soZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iXX0=