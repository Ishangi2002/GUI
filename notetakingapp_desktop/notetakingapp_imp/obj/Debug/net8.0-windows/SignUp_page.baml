   M S B A M L   `   `   `  ����L  Hnotetakingapp_imp, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:notetakingapp_impnotetakingapp_imp  5   	   #    notetakingapp_imp.SignUp_page   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:notetakingapp_imp     5   	     � Title$  Sign Up Page��5   	   $	��600��6   $	��900��6+   
������� � WindowState$ 	Maximized=�6J    � WindowStartupLocation$ CenterScreen=�5	   	   .��5
      �  � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $
��Auto �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5   
   �� $��1��6   $��1��6   $	��400��5       �� Padding$ 20q�5      
����������#D9DDDC$��1q�5       �� CornerRadius$ 10��5      $��0 -100 0 20q�5      ._�5      �� .+�5!      �� $��Sign Up��6   
���   �$��24(�5#      $��Poppins)�5$      $
��Left=�5%      $��	10,0,0,20q�5&      �� 5)      $ 5��6   ���#D9DDDC$��1q�5+      $��0,0,0,10q�5,      $��40��5-      ._�5.      �� -   5         ��Name$ txtName��5.      ���#909090$��14(�50      
������ $��0q�52      $��Center=�53      $
��Name��56      $
��10,0q�6*   $	��337��69   57      �� 5:      $ 5��6   ���#D9DDDC$��1q�5<      $��0,0,0,10q�5=      $��40��5>      ._�5?      �� -   5        $ txtEmail��5?      ���#909090$��14(�5A      
������ $��0q�5C      $��Center=�5D      $��Email��5G      $
��10,0q�6+   $	��347��6:   5H      �� 5K      $ 5��6   ���#D9DDDC$��1q�5M      $��0,0,0,20q�5N      $��40��5O      ._�5P      �� -   5        $ txtPassword��5P      ���#909090$��14(�5R      
������ $��0q�5T      $��Center=�5U      $��Password��5X      $
��10,0q�6.   $	��347��6=   5Y      �� 5\      -   5         ��Name$ 	btncreate��5\      $��Create Account��5^      $��40��5_      $��14(�5`      
�������$��0,0,0,20q�5b      $	��354��6+   ��5c      �� 5d      	 �� 
TargetType"	 ��6*   .R�5e      �� ���#7321A6$ 5��5f   %   ���#7321A6$��1q�5h   %   ._�5i   "   �� $��Center=�63   $��Center=�6P   5j      5k      5m      �� 5p      
 �� Orientation$
 
Horizontal=�6   $��Center=�66   $	��207��6S   .+�5q      �� $��Already have an account?��6   $��12(�5r      $��Center=�5s      $��36��67   �� 5t      $��	5 -10,0,0q�6    $��12(�63   $��Center=�6A   �� 5u      -   5        $��	Dashboard?�5u   $   .�6T   .�5v      �� $�Login��6"   5w      5x      5y      5z      5{      5|      5}      