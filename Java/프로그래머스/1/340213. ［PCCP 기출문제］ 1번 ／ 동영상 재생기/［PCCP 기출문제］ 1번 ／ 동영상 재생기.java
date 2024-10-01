class Solution {
    public String solution(String video_len, String pos, String op_start, String op_end, String[] commands) {
        int hour = Integer.parseInt(pos.split(":")[0]);
        int minute = Integer.parseInt(pos.split(":")[1]);
        
        int pos_num = Integer.parseInt(pos.replace(":", ""));
        int op_start_num = Integer.parseInt(op_start.replace(":", ""));
        int op_end_num = Integer.parseInt(op_end.replace(":", ""));
        
        int video_len_hour = Integer.parseInt(video_len.split(":")[0]);
        int video_len_minute = Integer.parseInt(video_len.split(":")[1]);
        
        if (pos_num >= op_start_num && pos_num <= op_end_num) {
            hour = Integer.parseInt(op_end.split(":")[0]);
            minute = Integer.parseInt(op_end.split(":")[1]);
        }
        
        for (String command : commands) {
            if (command.equals("next")) {
                minute += 10;
                
                if (minute >= 60) {
                    hour += 1;
                    minute -= 60;
                    if (hour > video_len_hour) {
                        hour = video_len_hour;
                        minute = video_len_minute;
                    }
                }
                
                if (hour == video_len_hour && minute > video_len_minute) {
                    hour = video_len_hour;
                    minute = video_len_minute;
                }
            } else if (command.equals("prev")) {
                minute -= 10;
                
                if (minute < 0) {
                    hour -= 1;
                    minute += 60;
                }
                
                if (hour < 0) {
                    hour = 0;
                    minute = 0;
                }                
            }
            
            int current_pos_num = Integer.parseInt(format(Integer.toString(hour), Integer.toString(minute)).replace(":", ""));
            
            if (current_pos_num >= op_start_num && current_pos_num <= op_end_num) {
                hour = Integer.parseInt(op_end.split(":")[0]);
                minute = Integer.parseInt(op_end.split(":")[1]);
            }
        }
        
        return format(Integer.toString(hour), Integer.toString(minute));
    }
        
    public String format(String hour, String minute) {
        if (hour.length() == 1) {
            hour = "0" + hour;
        }
        
        if (minute.length() == 1) {
            minute = "0" + minute;
        }
        
        return hour + ":" + minute;
    }
}